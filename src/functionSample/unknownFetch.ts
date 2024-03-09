export function unknownFetch() {
    
    // yugioh APIからデータを取得
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician")
    .then((response) => response.json())
    .then((data: unknown) => {
        console.log(data);
        // このif文中においては dataはdataというプロパティを持っているものとみなされる
        if(containsData(data)){ 
            return data.data;
        }
        return null;
    })
    .then((data: unknown) => {
        console.log(data)
        if (isList(data)){
            return data[0];
        }
        return null;
    }
    )
    .then((data: unknown) => {
        console.log(data);
        if (isCharacter(data)){
            console.log("name", data.name);
            return null;
        };
        console.log("Failed");
    });
}

function containsData( // 実際にdataを持っていれば、dataを持つオブジェクトとみなす
    value: any
    ):
    value is {data: any}{
        return "data" in value;
    }

function isList( // Array型と判定できれば、Array型とみなす
    value: any
    ):
    value is Array<any> {
        return Array.isArray(value); 
    }

function isCharacter(
    character: any
    ):
    character is {name: string} {
        return "name" in character; // characterがnameプロパティを持っているか
    } 