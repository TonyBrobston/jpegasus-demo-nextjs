import {Component} from 'react';
import Head from 'next/head';
import {compress} from 'jpegasus';

import {SelectOptionNumber, SelectOptionBoolean, InputOptionText} from '../components/Options';

class Home extends Component<{}, {
  compressedFile: File|Blob,
  originalFile: File
}> {
  constructor(props) {
    super(props);
    this.state = {
      compressedFile: null,
      originalFile: null
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
                defaultValue={1000}
                divideBy={1}
                maximum={10000}
                minimum={0} />
              <SelectOptionNumber
                labelText="maxWidth"
                increaseBy={100}
                defaultValue={1000}
                divideBy={1}
                maximum={10000}
                minimum={0} />
              <SelectOptionNumber
                labelText="scaleImageBy"
                increaseBy={1}
                defaultValue={1}
                divideBy={100}
                maximum={200}
                minimum={0} />
              <SelectOptionNumber
                labelText="quality"
                increaseBy={1}
                defaultValue={0.65}
                divideBy={100}
                maximum={100}
                minimum={0} />
              <SelectOptionBoolean
                labelText="returnOriginalIfCompressedFileIsLarger"
                defaultValue="false" />
              <SelectOptionBoolean
                labelText="returnOriginalOnFailure"
                defaultValue="true" />
              <SelectOptionBoolean
                labelText="fixImageOrientation"
                defaultValue="true" />
              <SelectOptionBoolean
                labelText="preserveFileType"
                defaultValue="false" />
              <InputOptionText
                labelText="transparencyFillColor"
                defaultValue="#FFF" />
              <label>
                <strong>Upload Image</strong>
                <input type="file" id="imageInput" onChange={
                  (event) => {
                    const originalFile = event.target.files[0];
                    this.setState({
                      compressedFile: null,
                      originalFile
                    });
                  }
                } />
              </label>
              <input type="button" value="Submit" onClick={
                async () => {
                  const originalFile = this.state.originalFile;
                  const compressedFile = await compress(originalFile);
                  this.setState({compressedFile})
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
                    <td id="originalOrientation">—</td>
                  </tr>
                  <tr>
                    <td><strong>Compressed</strong></td>
                    <td id="compressedSize">{this.state.compressedFile ? (this.state.compressedFile.size / 1024).toFixed(2) : "—"}</td>
                    <td id="compressedType">{this.state.compressedFile ? this.state.compressedFile.type : "—"}</td>
                    <td id="compressedOrientation">—</td>
                  </tr>
                </tbody>
              </table>
             </form>
          </header>
          <main role="main">
            <span id="compressedImageSpan">
              Please upload an image to see a preview here
            </span>
          </main>
        </div>
      </div>
    )
  }
}

export default Home;
