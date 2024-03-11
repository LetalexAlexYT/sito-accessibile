async function getTTS() {
    const response = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "GET",
        headers: new Headers({
            "Authorization": "Bearer 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",
            "Content-Type": "application/json"
        }),
        body: `{
            "model": "tts-1",
            "input": "Ciao Alessandro Picone",
            "voice": "alloy"
          }`
        
    })
    .then(response => response.blob())
        .then(blob => {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = "speech.mp3";
            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
            a.click();    
            a.remove();  //afterwards we remove the element again         
        });
}

/*
getAuthToken()
    .then(token => {
        fetch("http://example.com/ExportExcel", {
            method: 'GET',
            headers: new Headers({
                "Authorization": "Bearer " + token
            })
        })
        .then(response => response.blob())
        .then(blob => {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = "filename.xlsx";
            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
            a.click();    
            a.remove();  //afterwards we remove the element again         
        });
    });
*/