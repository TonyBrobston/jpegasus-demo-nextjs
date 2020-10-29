import Head from 'next/head';
import SelectOptionNumber from '../components/SelectOptionNumber';
import SelectOptionBoolean from '../components/SelectOptionBoolean';

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
                labelText="Max Height"
                increaseBy={100}
                defaultValue={1000}
                divideBy={1}
                maximum={10000}
                minimum={0} />
              <SelectOptionNumber
                labelText="Max Width"
                increaseBy={100}
                defaultValue={1000}
                divideBy={1}
                maximum={10000}
                minimum={0} />
              <SelectOptionNumber
                labelText="Scale Image By"
                increaseBy={1}
                defaultValue={1}
                divideBy={100}
                maximum={200}
                minimum={0} />
              <SelectOptionNumber
                labelText="Quality"
                increaseBy={1}
                defaultValue={0.65}
                divideBy={100}
                maximum={100}
                minimum={0} />
              <SelectOptionBoolean
                labelText="Return original if compressed file is larger"
                defaultValue="false" />
              <SelectOptionBoolean
                labelText="Return original on failure"
                defaultValue="true" />
              <SelectOptionBoolean
                labelText="Fix image orientation"
                defaultValue="true" />
              <SelectOptionBoolean
                labelText="Preserve file type"
                defaultValue="false" />
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
