/**
 * Paper Renderer - 数据驱动的论文展示页面渲染器
 * 通过修改JSON数据文件来快速创建新的论文展示页面
 */
window.paperRenderer = (function() {
    'use strict';

    let paperData = null;

    /**
     * 初始化渲染器
     * @param {string} dataUrl - JSON数据文件路径
     */
    function init(dataUrl) {
        loadPaperData(dataUrl)
            .then(data => {
                paperData = data;
                renderPage();
                hideLoading();
                setupInteractions();
            })
            .catch(error => {
                console.error('Error loading paper data:', error);
                showError('Failed to load paper data. Please check the console for details.');
            });
    }

    /**
     * 加载论文数据
     * @param {string} url - JSON文件URL
     * @returns {Promise} 返回包含论文数据的Promise
     */
    function loadPaperData(url) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            });
    }

    /**
     * 渲染整个页面
     */
    function renderPage() {
        if (!paperData) return;

        updateMetadata();
        renderHeader();
        renderAbstract();
        renderSections();
        renderContributions();
        renderPaperInfo();
        renderFooter();
        updateStructuredData();
    }

    /**
     * 更新页面元数据
     */
    function updateMetadata() {
        const { metadata, authors } = paperData;
        
        // 更新标题
        document.title = `${metadata.title} | ${metadata.conference}`;
        
        // 更新meta标签
        updateMetaTag('description', metadata.description);
        updateMetaTag('keywords', metadata.keywords.join(', '));
        updateMetaTag('author', authors.map(author => author.name).join(', '));
        
        // 更新Open Graph标签
        updateMetaProperty('og:title', metadata.title);
        updateMetaProperty('og:description', metadata.description);
        updateMetaProperty('og:url', paperData.links.website?.url || window.location.href);
        
        if (paperData.paper.thumbnail) {
            const thumbnailUrl = new URL(paperData.paper.thumbnail, window.location.href).href;
            updateMetaProperty('og:image', thumbnailUrl);
        }
    }

    /**
     * 更新meta标签
     * @param {string} name - meta标签name属性
     * @param {string} content - meta标签content内容
     */
    function updateMetaTag(name, content) {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('name', name);
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
    }

    /**
     * 更新meta property标签
     * @param {string} property - meta标签property属性
     * @param {string} content - meta标签content内容
     */
    function updateMetaProperty(property, content) {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('property', property);
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
    }

    /**
     * 渲染页面头部
     */
    function renderHeader() {
        const { metadata, authors, affiliations, links } = paperData;

        // 会议徽章
        const conferenceBadge = document.getElementById('conference-badge');
        if (metadata.conferenceUrl) {
            conferenceBadge.innerHTML = `<a href="${metadata.conferenceUrl}" style="color: white; text-decoration: none;">${metadata.conference}</a>`;
        } else {
            conferenceBadge.textContent = metadata.conference;
        }

        // 论文标题
        document.getElementById('paper-title').textContent = metadata.title;

        // 作者列表
        const authorsContainer = document.getElementById('authors');
        authorsContainer.innerHTML = authors.map(author => {
            const affiliationSups = author.affiliations.map(aff => `<sup>${aff}</sup>`).join('');
            if (author.url) {
                return `<a href="${author.url}" class="author">${author.name}${affiliationSups}</a>`;
            } else {
                return `<span class="author">${author.name}${affiliationSups}</span>`;
            }
        }).join('\n');

        // 机构列表
        const affiliationsContainer = document.getElementById('affiliations');
        affiliationsContainer.innerHTML = Object.entries(affiliations).map(([key, affiliation]) => {
            if (affiliation.url) {
                return `<div class="affiliation"><sup>${key}</sup><a href="${affiliation.url}">${affiliation.name}</a></div>`;
            } else {
                return `<div class="affiliation"><sup>${key}</sup>${affiliation.name}</div>`;
            }
        }).join('\n');

        // 链接按钮
        renderLinks(links, 'paper-links');
    }

    /**
     * 渲染链接按钮
     * @param {Object} links - 链接对象
     * @param {string} containerId - 容器ID
     */
    function renderLinks(links, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = Object.entries(links).map(([key, link]) => {
            const className = `btn btn-${key}`;
            return `<a href="${link.url}" class="${className}">${link.icon} ${link.text}</a>`;
        }).join('\n');
    }

    /**
     * 渲染摘要部分
     */
    function renderAbstract() {
        document.getElementById('abstract-content').textContent = paperData.abstract;
    }

    /**
     * 渲染动态章节
     */
    function renderSections() {
        const sectionsContainer = document.getElementById('dynamic-sections');
        const sections = paperData.sections;

        sectionsContainer.innerHTML = Object.entries(sections).map(([key, section]) => {
            return renderSection(key, section);
        }).join('\n');
    }

    /**
     * 渲染单个章节
     * @param {string} id - 章节ID
     * @param {Object} section - 章节数据
     * @returns {string} 章节HTML
     */
    function renderSection(id, section) {
        let html = `<section id="${id}">
            <h2>${section.title}</h2>`;

        if (section.content) {
            html += `<p>${section.content}</p>`;
        }

        if (section.figure) {
            html += renderFigure(section.figure, 'main-figure');
        }

        if (section.figures) {
            html += `<div class="results-grid">`;
            html += section.figures.map(figure => renderFigure(figure, 'result-figure')).join('\n');
            html += `</div>`;
        }

        if (section.subsections) {
            html += section.subsections.map(subsection => {
                let subHtml = `<h3>${subsection.title}</h3>`;
                if (subsection.content) {
                    subHtml += `<p>${subsection.content}</p>`;
                }
                if (subsection.figure) {
                    subHtml += renderFigure(subsection.figure, 'method-figure');
                }
                return subHtml;
            }).join('\n');
        }

        html += `</section>`;
        return html;
    }

    /**
     * 渲染图片
     * @param {Object} figure - 图片数据
     * @param {string} className - 图片容器类名
     * @returns {string} 图片HTML
     */
    function renderFigure(figure, className) {
        let html = `<figure class="${className}">
            <img src="${figure.src}" alt="${figure.alt}" loading="lazy">`;
        
        if (figure.caption) {
            html += `<figcaption>${figure.caption}</figcaption>`;
        }
        
        html += `</figure>`;
        return html;
    }

    /**
     * 渲染贡献部分
     */
    function renderContributions() {
        const contributionsContainer = document.getElementById('contributions');
        contributionsContainer.innerHTML = paperData.contributions.map((contribution, index) => {
            return `<div class="contribution-item">
                <h4>${index + 1}. ${contribution.title}</h4>
                <p>${contribution.content}</p>
            </div>`;
        }).join('\n');
    }

    /**
     * 渲染论文信息
     */
    function renderPaperInfo() {
        const { metadata, authors, paper, links } = paperData;

        // 论文缩略图
        const thumbnail = document.getElementById('paper-thumbnail');
        thumbnail.src = paper.thumbnail;
        thumbnail.alt = paper.thumbnailAlt;

        // 论文详细信息
        document.getElementById('paper-title-detail').textContent = metadata.title;
        document.getElementById('paper-authors').textContent = authors.map(author => author.name).join(', ');
        document.getElementById('paper-venue').textContent = metadata.conference;

        // 详细链接
        renderLinks(links, 'paper-links-detailed');
    }

    /**
     * 渲染页脚
     */
    function renderFooter() {
        document.getElementById('last-update').textContent = `Last update: ${paperData.metadata.lastUpdate}`;
    }

    /**
     * 更新结构化数据
     */
    function updateStructuredData() {
        const { metadata, authors } = paperData;
        
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "name": metadata.title,
            "author": authors.map(author => ({
                "@type": "Person",
                "name": author.name,
                "url": author.url || undefined
            })).filter(author => author.url !== undefined),
            "datePublished": new Date().getFullYear().toString(),
            "publisher": {
                "@type": "Organization",
                "name": metadata.conference
            },
            "url": paperData.links.website?.url || window.location.href,
            "description": metadata.description
        };

        document.getElementById('structured-data').textContent = JSON.stringify(structuredData, null, 2);
    }

    /**
     * 隐藏加载指示器并显示主内容
     */
    function hideLoading() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }

    /**
     * 显示错误信息
     * @param {string} message - 错误消息
     */
    function showError(message) {
        document.getElementById('loading').innerHTML = `
            <div class="error-container">
                <h2>Error</h2>
                <p>${message}</p>
                <p>Please check the paper-data.json file and try again.</p>
            </div>
        `;
    }

    /**
     * 设置页面交互
     */
    function setupInteractions() {
        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // 图片懒加载回调
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[loading="lazy"]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // 公开API
    return {
        init: init,
        getPaperData: function() { return paperData; },
        renderPage: renderPage
    };
})(); 