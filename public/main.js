getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      console.log("下载完成");
      if (request.status >= 200 && request.status < 300) {
        //创建一个style标签
        const style = document.createElement("style");
        //填写style内容
        style.innerHTML = request.response;
        //插到head里
        document.head.appendChild(style);
      } else {
        alert("请求失败");
      }
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    //创建script标签
    const script = document.createElement("script");
    //填写script内容
    script.innerHTML = request.response;
    //插到body里
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    //创建一个div
    const div = document.createElement("div");
    //填写div的内容 request.response就是一个字符串，请求的那个内容
    div.innerHTML = request.response;
    //插到body里
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.responseXML);
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);
        const obj = JSON.parse(request.response); //把符合JSON语法的字符串转换成对象或其他东西
        myName.innerText = obj.name;
      }
    }
  };
  request.send();
};

let n = 2;
getPAGE.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n}.json`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const arr = JSON.parse(request.response);
        arr.forEach(x => {
          const li = document.createElement("li");
          li.innerText = x.id;
          ul.appendChild(li);
        });
        n += 1;
      }
    }
  };
  request.send();
};
