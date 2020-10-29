import Head from 'next/head';
import Option from '../components/Option';

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <header>
          <h1>
            <img alt="JPEGasus logo" src="img/jpegasus-logo-reversed.png" />
          </h1>
          <form>
              <Option
                labelText="Max Height"
                decreaseBy={100}
                defaultValue={1000}
                divideBy={1}
                maximum={10000}
                minimum={0} />
              <Option
                labelText="Max Width"
                decreaseBy={100}
                defaultValue={1000}
                divideBy={1}
                maximum={10000}
                minimum={0} />
              <Option
                labelText="Scale Image By"
                decreaseBy={1}
                defaultValue={1}
                divideBy={100}
                maximum={200}
                minimum={0} />
              <Option
                labelText="Quality"
                decreaseBy={1}
                defaultValue={0.65}
                divideBy={100}
                maximum={100}
                minimum={0} />
              <label>
                 <strong>Return original if compressed file is larger</strong>
                 <select id="returnOriginalIfCompressedFileIsLargerSelector" value="false">
                    <option value="false">false</option>
                    <option value="true">true</option>
                 </select>
              </label>
              <label>
                 <strong>Return original on failure</strong>
                 <select id="returnOriginalOnFailureSelector" value="true">
                    <option value="true">true</option>
                    <option value="false">false</option>
                 </select>
              </label>
              <label>
                 <strong>Fix image orientation</strong>
                 <select id="fixImageOrientation" value="true">
                    <option value="true">true</option>
                    <option value="false">false</option>
                 </select>
              </label>
              <label>
                 <strong>Preserve file type</strong>
                 <select id="preserveFileType" value="false">
                    <option value="true">true</option>
                    <option value="false">false</option>
                 </select>
              </label>
              <label>
                 <strong>Transparency fill color</strong>
                 <input type="text" id="transparencyFillColor" value="#FFF" />
              </label>
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
