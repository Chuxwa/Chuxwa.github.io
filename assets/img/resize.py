from PIL import Image

def resize_image(input_path, output_path, size):
    # 打开图像文件
    with Image.open(input_path) as img:
        # 调整图像大小
        resized_img = img.resize(size)
        # 保存调整后的图像
        resized_img.save(output_path)

# 示例用法

size = (128, 128)
resize_image('assets/img/logo.png', 'assets/img/logo-128x128.png', size)

size = (256, 256)
resize_image('assets/img/logo.png', 'assets/img/logo-256x256.png', size)


