---
layout: default
title: Hi, this is Chuxin Wang.
description: >
  The homepage of Chuxin Wang.
hide_description: true
last_modified_at: 2025-02-07
no_link_title: false 
no_excerpt: false 
cover: true
---

<h2 id="about"><span style="color:rgb(237, 118, 74); font-size: 1.5em;">Biography</span></h2>

Hi! I am a PhD student in Department of Automation at [University of Science and Technology of China](https://www.ustc.edu.cn/), advised by Prof. [Weiren Wu](https://en.wikipedia.org/wiki/Wu_Weiren) and [Tianzhu Zhang](https://scholar.google.com/citations?user=9sCGe-gAAAAJ&hl=zh-CN).

My research primarily focuses on <strong style="color:rgb(240, 92, 38);">3D computer vision</strong>, including 3D foundation models, self-supervised/semi-supervised learning, 3D scene understanding, and representation learning. 

Previously, I interned with the Visual Computing Group at [Microsoft Research Asia](https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/) (2020-2021) and [Deep Space Exploration Laboratory](http://www.dsel.cc/#/spaceFile/index) (2024-2025).

<div style="height: 10px;"></div> <!-- 空行 -->
**News 🔥**
<div class="news-scroll" style="border: 1px solid #eee; border-radius: 10px; padding: 12px; height: 300px; overflow-y: scroll;">
  <ul>
    {% for item in site.data.news.news %}
    <li>{{ item.date }}: <a href="{{ item.link }}">{{ item.title }}</a> was accepted by <strong style="color:rgb(240, 92, 38);">{{ item.venue }}</strong>.</li>
    {% endfor %}
  </ul>
</div>

<style>
/* 新闻区滚动条美化 */
.news-scroll::-webkit-scrollbar {
  width: 8px;
  background: #f5f5f5;
  border-radius: 8px;
}
.news-scroll::-webkit-scrollbar-thumb {
  background: #ed764a;
  border-radius: 8px;
  min-height: 30px;
}
.news-scroll::-webkit-scrollbar-thumb:hover {
  background: #d65c2a;
}
/* Firefox */
.news-scroll {
  scrollbar-width: thin;
  scrollbar-color: #ed764a #f5f5f5;
}
</style>

<div style="height: 10px;"></div> <!-- 空行 -->
**Experiences 📖**
<style>
  .experience-item {
    display: flex;
    align-items: baseline;
    justify-content: left; /* 居中整个容器 */
  }
  .experience-date {
    min-width: 180px; /* 根据需要调整宽度 */
    text-align: left; /* 确保内容左对齐 */
  }
</style>

<div class="experience-item">
  <span class="experience-date">Feb. 2024 - Now:</span> Algorithm development intern, DSEL
</div>
<div class="experience-item">
  <span class="experience-date">Sep. 2021 - Now:</span> PhD Student, USTC
</div>
<div class="experience-item">
  <span class="experience-date">Jul. 2020 - Jun. 2021:</span> Research intern, MSRA (VC Group)
</div>
<div class="experience-item">
  <span class="experience-date">Sep. 2017 - Jun. 2021:</span> Undergraduate, USTC
</div>

<div style="height: 10px;"></div> <!-- 空行 -->
<!-- <div class="logo" style="display: flex; justify-content: space-around; align-items: center;"> -->
<div class="logo" style="display: flex; justify-content: left; align-items: center; gap: 20px;">
  <!-- <a href="https://en.nwpu.edu.cn/"><img src="images/logo_NWPU.png" alt="NWPU" style="height: 100px; width: auto;"></a> -->
  <!-- <a href="https://www.huawei.com/en/"><img src="images/logo_HUAWEI.jpeg" alt="HUAWEI" style="height: 100px; width: auto;"></a> -->
  <a><img src="assets/img/logo-ustc.png" alt="USTC" style="height: 120px; width: auto;"></a>
  <a><img src="assets/img/logo-msra.png" alt="MSRA" style="height: 100px; width: auto;"></a>
  <a><img src="assets/img/logo-dsel.png" alt="DSEL" style="height: 130px; width: auto;"></a>
</div>

<div style="height: 30px;"></div> <!-- 空行 -->
<h2 id="publications"><span style="color:rgb(237, 118, 74); font-size: 1.5em;">Publications</span></h2>

\* denotes Equal Contribution. \+ denotes First Student Author. More publications can be found in <a href="https://scholar.google.com/citations?user=0kS2MgIAAAAJ&hl=en">Google Scholar</a>.

<table style="border-collapse: collapse; border: none;">
{% for pub in site.data.publications.publications %}
  <tr style="border: none;">
    <td style="width: 120px; text-align: center; border: none; vertical-align: middle;">
      <img src="{{ pub.image }}" alt="论文图片" style="width: 100%; max-width: 180px; min-width: 100px; height: auto; object-fit: contain; border-radius: 8px;" onerror="this.onerror=null;this.src='https://via.placeholder.com/180x60?text=No+Image';"/>
    </td>
    <td style="border: none; vertical-align: middle;">
      <div style="font-size: 1.1em; font-weight: bold; margin-bottom: 2px;">
        {{ pub.title }}
      </div>
      <div style="margin-bottom: 2px;">
        {{ pub.authors }}
      </div>
      <div style="margin-bottom: 4px;">
        <span style="color: #ED764A; font-weight: bold;">{{ pub.venue }}</span>
      </div>
      <div>
        {% if pub.links.paper %}
          <a href="{{ pub.links.paper }}" style="border:1px solid #ED764A; border-radius:4px; padding:2px 8px; margin-right:4px; text-decoration:none; color:#ED764A;">Paper</a>
        {% endif %}
        {% if pub.links.webpage %}
          <a href="{{ pub.links.webpage }}" style="border:1px solid #ED764A; border-radius:4px; padding:2px 8px; margin-right:4px; text-decoration:none; color:#ED764A;">Webpage</a>
        {% endif %}
        {% if pub.links.code %}
          <a href="{{ pub.links.code }}" style="border:1px solid #ED764A; border-radius:4px; padding:2px 8px; margin-right:4px; text-decoration:none; color:#ED764A;">Code</a>
        {% endif %}
        {% if pub.links.poster %}
          <a href="{{ pub.links.poster }}" style="border:1px solid #ED764A; border-radius:4px; padding:2px 8px; margin-right:4px; text-decoration:none; color:#ED764A;">Poster</a>
        {% endif %}
        {% if pub.links.bibtex %}
          <a href="{{ pub.links.bibtex }}" style="border:1px solid #ED764A; border-radius:4px; padding:2px 8px; text-decoration:none; color:#ED764A;">BibTeX</a>
        {% endif %}
      </div>
    </td>
  </tr>
{% endfor %}
</table>

<div style="height: 30px;"></div> <!-- 空行 -->
<h2 id="services"><span style="color:rgb(237, 118, 74); font-size: 1.5em;">Academic Services</span></h2>

*Conference Reviewer*
- IEEE Conference on Computer Vision and Pattern Recognition (CVPR)
- International Conference on Computer Vision (ICCV)
- European Conference on Computer Vision (ECCV)
- Conference on Neural Information Processing Systems (NeurIPS)
- Association for the Advancement of Artificial Intelligence (AAAI)
- International Conference on Learning Representations (ICLR)
- International Conference on Machine Learning (ICML)
- International Conference on Artificial Intelligence and Statistics (AISTATS)

*Journal Reviewer*
<!-- - IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI) -->
- IEEE Transactions on Image Processing (TIP)
- IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)


<div style="height: 30px;"></div> <!-- 空行 -->
<h2 id="honors"><span style="color:rgb(237, 118, 74); font-size: 1.5em;">Honors and Awards</span></h2>

<style>
  .honor-item {
    display: flex;
    align-items: baseline;
  }
  .honor-date {
    min-width: 100px; /* 根据需要调整宽度 */
  }
</style>

<div class="honor-item">
  <span class="honor-date">Oct. 2024:</span> First-Class Academic Scholarship for PhD Students, USTC
</div>
<div class="honor-item">
  <span class="honor-date">Mar. 2024:</span> Outstanding Student, Deep Space Exploration Laboratory, USTC
</div>
<div class="honor-item">
  <span class="honor-date">Oct. 2023:</span> First-Class Academic Scholarship for PhD Students, USTC
</div>
<div class="honor-item">
  <span class="honor-date">Oct. 2023:</span> <strong style="color:rgb(240, 92, 38);">National Scholarship of China (Master)</strong>
</div>
<div class="honor-item">
  <span class="honor-date">Oct. 2022:</span> First-Class Academic Scholarship for Master Students, USTC
</div>
<div class="honor-item">
  <span class="honor-date">Oct. 2021:</span> First-Class Academic Scholarship for Master Students, USTC
</div>
<div class="honor-item">
  <span class="honor-date">Jun. 2021:</span> <strong style="color:rgb(240, 92, 38);">Outstanding Graduate and Thesis (Undergraduate), USTC</strong>
</div>
<div class="honor-item">
  <span class="honor-date">Nov. 2020:</span> <strong style="color:rgb(240, 92, 38);">National Scholarship of China (Undergraduate)</strong>
</div>


