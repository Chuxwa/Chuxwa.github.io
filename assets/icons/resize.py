from PIL import Image

def resize_image(input_path, output_path, size):
    # 打开图像文件
    with Image.open(input_path) as img:
        # 调整图像大小
        resized_img = img.resize(size)
        # 保存调整后的图像
        resized_img.save(output_path)

# 示例用法
size = (72, 72)
resize_image('assets/icons/icon-512x512.png', 'assets/icons/icon-72x72.png', size)

size = (96, 96)
resize_image('assets/icons/icon-512x512.png', 'assets/icons/icon-96x96.png', size)

size = (128, 128)
resize_image('assets/icons/icon-512x512.png', 'assets/icons/icon-128x128.png', size)

size = (144, 144)
resize_image('assets/icons/icon-512x512.png', 'assets/icons/icon-144x144.png', size)

size = (152, 152)
resize_image('assets/icons/icon-512x512.png', 'assets/icons/icon-152x152.png', size)

size = (192, 192)
resize_image('assets/icons/icon-512x512.png', 'assets/icons/icon-192x192.png', size)

size = (384, 384)
resize_image('assets/icons/icon-512x512.png', 'assets/icons/icon-384x384.png', size)

