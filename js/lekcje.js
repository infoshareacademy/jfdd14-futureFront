// console.log("start")


// let root1 = document.querySelector('.root');
// const newdiv = document.createElement('h1');
// newdiv.innerHTML = `<h1 class=""> NAPIS 1 </h1>`;

// const newdiv2 = document.createElement('h1');
// newdiv2.innerHTML = `<h1 class=""> NAPIS 2 </h1>`;

// const newdiv3 = document.createElement('h1');
// newdiv3.innerHTML = `<h1 class=""> NAPIS 3 </h1>`;

// root1.append(newdiv);
// root1.append(newdiv);

// function write() {
//    root1.append(newdiv);
//    setTimeout(function () { root1.append(newdiv2); console.log('xxxxx');}, 1000);
//    setTimeout(function () { root1.append(newdiv3); console.log('yyyyyy');}, 2000);
// }

// write()


const textContainer = document.querySelector('.root');


function timer(time, operation) {
    setTimeout(() => {
        operation();
    }, time)
}


function calculate(elements) {
    elements.map((element, index) => {
        timer(2000, () => { textContainer.innerHTML += `${index}: ${element.title}<br>` });
    });
}

// function onProgress(e) {
//     var percentComplete = (e.position / e.totalSize)*100;
//     if(percentComplete < 100)
//         console.log(`${percentComplete}`);
//   }




var req = new XMLHttpRequest();
req.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
req.onreadystatechange = function (aEvt) {
    if (req.readyState == 4) {
        if (req.status == 200) {
            calculate(JSON.parse(req.responseText))
        }
        else
            console.log("Błąd podczas ładowania strony\n");
    }
};

console.log(req.total, " rozmiar")

// req.addEventListener("progress", function(e) {
//     if (e.lengthComputable) {
//         const progress = (e.loaded / e.total) * 100;
//         console.log(progress)
//     } else {
//         console.log("nie da się wyliczyć postępu");
//     }
// });
req.send(null);

// function onProgress(e) {
//     var percentComplete = (e.position / e.totalSize)*100;
//     if(percentComplete < 100)
//         console.log(`${percentComplete}`);
//   }

// req.onprogress = onProgress;


console.log("FEEEEEEEEEEEEETCH")




fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(response => {
        response.map((element, index) => {
            document.querySelector(".loading").style.display = 'block';
            timer(2000, () => { textContainer.innerHTML += `${index}: ${element.title}<br>`;
            document.querySelector(".loading").style.display = 'none'; });
        });
    })










//   function onError(e) {
//     alert("Podczas pobierania dokumentu wystąpił błąd " + e.target.status + ".");
//   }

//   function onLoad(e) {
    // ...
//   }
  // ...
//   var req = new XMLHttpRequest();
//   req.onprogress = onProgress;
//   req.open("GET", url, true);
//   req.onload = onLoad;
//   req.onerror = onError;
//   req.send(null)