import Head from 'next/head';
import {SelectOptionNumber, SelectOptionBoolean, InputOptionText} from '../components/Options';

export default function Home() {
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
               <input type="file" id="imageInput" />
            </label>
            <input type="button" value="Submit" />
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
                  <td id="originalSize">—</td>
                  <td id="originalType">—</td>
                  <td id="originalOrientation">—</td>
                </tr>
                <tr>
                  <td><strong>Compressed</strong></td>
                  <td id="compressedSize">—</td>
                  <td id="compressedType">—</td>
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
