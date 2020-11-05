import {Component} from 'react';
import {compress, determineOrientation} from 'jpegasus';

import {SelectOptionNumber, SelectOptionBoolean, InputOptionText} from '../components/Options';

class Home extends Component<{}, {
  compressedFile: File|Blob,
  compressedFileOrientation: number,
  options: {
    maxHeight: number,
    maxWidth: number,
    scaleImageBy: number,
    quality: number,
    returnOriginalIfCompressedFileIsLarger: boolean,
    returnOriginalOnFailure: boolean,
    fixImageOrientation: boolean,
    preserveFileType: boolean,
    transparencyFillColor: string
  },
  originalFile: File,
  originalFileOrientation: number
}> {
  constructor(props) {
    super(props);
    this.state = {
      compressedFile: null,
      compressedFileOrientation: null,
      options: {
        maxHeight: 1000,
        maxWidth: 1000,
        scaleImageBy: 1,
        quality: 0.65,
        returnOriginalIfCompressedFileIsLarger: false,
        returnOriginalOnFailure: true,
        fixImageOrientation: true,
        preserveFileType: false,
        transparencyFillColor: '#FFF'
      },
      originalFile: null,
      originalFileOrientation: null,
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <header>
            <h1>
              <img alt="JPEGasus logo" src="img/jpegasus-logo-reversed.png" />
            </h1>
            <form>
              <SelectOptionNumber
                labelText="maxHeight"
                increaseBy={100}
                value={this.state.options.maxHeight}
                divideBy={1}
                maximum={10000}
                minimum={0}
                onChange={
                  ({target: {value}}) => {
                    this.setState({
                      options: {
                        ...this.state.options,
                        maxHeight: parseInt(value)
                      }
                    })
                  }
                }
              />
              <SelectOptionNumber
                labelText="maxWidth"
                increaseBy={100}
                value={this.state.options.maxWidth}
                divideBy={1}
                maximum={10000}
                minimum={0}
                onChange={
                  ({target: {value}}) => {
                    this.setState({
                      options: {
                        ...this.state.options,
                        maxWidth: parseInt(value)
                      }
                    })
                  }
                }
              />
              <SelectOptionNumber
                labelText="scaleImageBy"
                increaseBy={1}
                value={this.state.options.scaleImageBy}
                divideBy={100}
                maximum={200}
                minimum={0}
                onChange={
                  ({target: {value}}) => {
                    this.setState({
                      options: {
                        ...this.state.options,
                        scaleImageBy: parseFloat(value)
                      }
                    })
                  }
                }
              />
              <SelectOptionNumber
                labelText="quality"
                increaseBy={1}
                value={this.state.options.quality}
                divideBy={100}
                maximum={100}
                minimum={0}
                onChange={
                  ({target: {value}}) => {
                    this.setState({
                      options: {
                        ...this.state.options,
                        quality: parseFloat(value)
                      }
                    })
                  }
                }
              />
              <SelectOptionBoolean
                labelText="returnOriginalIfCompressedFileIsLarger"
                value={this.state.options.returnOriginalIfCompressedFileIsLarger}
                onChange={
                  ({target: {value}}) => {
                    this.setState({
                      options: {
                        ...this.state.options,
                        returnOriginalIfCompressedFileIsLarger: value === "true"
                      }
                    })
                  }
                }
              />
              <SelectOptionBoolean
                labelText="returnOriginalOnFailure"
                value={this.state.options.returnOriginalOnFailure}
                onChange={
                  ({target: {value}}) => {
                    this.setState({
                      options: {
                        ...this.state.options,
                        returnOriginalOnFailure: value === "true"
                      }
                    })
                  }
                }
              />
              <SelectOptionBoolean
                labelText="fixImageOrientation"
                value={this.state.options.fixImageOrientation}
                onChange={
                  ({target: {value}}) => {
                    this.setState({
                      options: {
                        ...this.state.options,
                        fixImageOrientation: value === "true"
                      }
                    })
                  }
                }
              />
              <SelectOptionBoolean
                labelText="preserveFileType"
                value={this.state.options.preserveFileType}
                onChange={
                  ({target: {value}}) => {
                    this.setState({
                      options: {
                        ...this.state.options,
                        preserveFileType: value === "true"
                      }
                    })
                  }
                }
              />
              <InputOptionText
                labelText="transparencyFillColor"
                value={this.state.options.transparencyFillColor}
                onChange={
                  ({target: {value}}) => {
                    this.setState({
                      options: {
                        ...this.state.options,
                        transparencyFillColor: value
                      }
                    })
                  }
                }
              />
              <label>
                <strong>Upload Image</strong>
                <input
                  type="file"
                  id="imageInput"
                  onChange={
                    async ({target: {files}}) => {
                      const originalFile = files[0];
                      const originalFileOrientation = originalFile ? await determineOrientation(originalFile) : null;
                      this.setState({
                        compressedFile: null,
                        compressedFileOrientation: null,
                        originalFileOrientation,
                        originalFile
                      });
                    }
                  } />
              </label>
              <input
                type="button"
                value="Submit"
                onClick={
                  async () => {
                    const {originalFile, options} = this.state;
                    const compressedFile = await compress(originalFile, options);
                    const compressedFileOrientation = await determineOrientation(compressedFile);
                    this.setState({
                      compressedFile,
                      compressedFileOrientation
                    })
                  }
                } />
              <table>
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Size (kb)</th>
                    <th>Type</th>
                    <th>Orientation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Original</strong></td>
                    <td id="originalSize">{this.state.originalFile ? (this.state.originalFile.size / 1024).toFixed(2) : "—"}</td>
                    <td id="originalType">{this.state.originalFile ? this.state.originalFile.type : "—"}</td>
                    <td id="originalOrientation">{this.state.originalFileOrientation ? this.state.originalFileOrientation : "—"}</td>
                  </tr>
                  <tr>
                    <td><strong>Compressed</strong></td>
                    <td id="compressedSize">{this.state.compressedFile ? (this.state.compressedFile.size / 1024).toFixed(2) : "—"}</td>
                    <td id="compressedType">{this.state.compressedFile ? this.state.compressedFile.type : "—"}</td>
                    <td id="compressedOrientation">{this.state.compressedFileOrientation ? this.state.compressedFileOrientation : "—"}</td>
                  </tr>
                </tbody>
              </table>
             </form>
          </header>
          <main role="main">
            <span id="compressedImageSpan">
              {
                this.state.compressedFile ?
                  <img
                    id="compressedImage"
                    src={URL.createObjectURL(this.state.compressedFile)}
                  />
                :
                  "Please upload an image to see a preview here"
              }
            </span>
          </main>
        </div>
      </div>
    )
  }
}

export default Home;
