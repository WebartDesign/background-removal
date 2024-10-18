# Image Background Removal Tool

This project provides a simple command-line tool to remove backgrounds from images using the `@imgly/background-removal-node` library.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [License](#license)
- [Dependency Licenses and Liability](#dependency-licenses-and-liability)

## Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory.
3. Install the required dependencies:

```bash
npm install
```

## Usage

To remove the background from an image, use the following command:

```bash
node remove-background.js <input_image_path> <output_image_path>
```

Replace `<input_image_path>` with the path to your input image and `<output_image_path>` with the desired path for the output image.

For example:

```bash
node remove-background.js ./input/photo.jpg ./output/photo_no_bg.png
```

## Configuration

The background removal process can be configured by modifying the `config` object in the `remove-background.js` file. The current configuration is:

```javascript
const config = {
    debug: false,
    model: 'medium',
    output: { format: 'image/png', quality: 0.5 },
};
```

- `debug`: Set to `true` to enable debug mode.
- `model`: Choose between 'fast', 'medium', or 'accurate' models.
- `output.format`: Specify the output image format.
- `output.quality`: Set the quality of the output image (0 to 1).

## Dependencies

This project relies on the following main dependency:

- [@imgly/background-removal-node](https://www.npmjs.com/package/@imgly/background-removal-node): A Node.js library for removing backgrounds from images.

Other dependencies include built-in Node.js modules like `fs` and `path`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Dependency Licenses and Liability

Please note that while this project is released under the MIT License, the dependencies used in this project are subject to their own respective licenses. Users of this software are responsible for complying with the licenses of all dependencies.

The authors and contributors of this project accept no liability for the use of this software or its dependencies. Use this software at your own risk.

It is your responsibility to review and comply with the licenses of all dependencies used in this project. The main dependency, `@imgly/background-removal-node`, and other Node.js packages may have different licensing terms than this project.

---

For any issues or feature requests, please open an issue on the project's GitHub repository.