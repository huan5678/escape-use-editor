const editorConfig = {
  skin: "rounded-corner",
  toolbar: 'basic',
  execCommand: {

  },
};
/*

可插入圖片連結（出現對話框，可貼上圖片連結）
可做圖片大小縮放
可插入文字連結
可改為粗體、斜體
可更改字級大小

*/

const editor = new RichTextEditor('#description', editorConfig);

console.log(editor);

editor.attachEvent("change", function () {
  console.log('got you !');
  const imgTags = editor.document.querySelectorAll('img');
  imgTags.forEach(img => {
    img.src = "./images/simple.webp";
  });
      //插入預設圖片
});
