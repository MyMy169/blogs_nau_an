import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class TextBlog extends Component {
    render() {
        // return (
        //     <div className="TextBlog">
        //         <h2>Using CKEditor 5 build in React</h2>
        //         <CKEditor
        //             editor={ ClassicEditor }
        //             data="<p>Hello from CKEditor 5!</p>"
        //             onReady={ editor => {
        //                 // You can store the "editor" and use when it is needed.
        //                 console.log( 'Editor is ready to use!', editor );
        //             } }
        //             onChange={ ( event, editor ) => {
        //                 const data = editor.getData();
        //                 console.log( { event, editor, data } );
        //             } }
        //             onBlur={ ( event, editor ) => {
        //                 console.log( 'Blur.', editor );
        //             } }
        //             onFocus={ ( event, editor ) => {
        //                 console.log( 'Focus.', editor );
        //             } }
        //         />
        //     </div>
        // );
        return (
            <div className="App">
              <h1>Ckeditor5 Reactjs</h1>
              <CKEditor className="mt-3 wrap-ckeditor" editor={ClassicEditor} />
            </div>
          );
    }
}

export default TextBlog;