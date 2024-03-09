export function unknownFetch() {
    
    // yugioh APIからデータを取得
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician")
    .then((response) => response.json())
    .then((data: unknown) => {
        if(containsData(data)){ 
            return data.data; // dataプロパティのみを抽出
        }
        return null;
    })
    .then((data: unknown) => { //
        if (isList(data)){ 
            return data[0];
        }
        return null;
    }
    )
    .then((data: unknown) => {
        if (isCharacter(data)){
            console.log("name", data.name);
            return null;
        };
        console.log("Failed");
    });
}

/** 実際にdataを持っていれば、dataを持つオブジェクトとみなす*/
function containsData( 
    value: any
    ):
    value is {data: any}{
        return "data" in value;
    }

/** Array型と判定できれば、Array型とみなす*/
function isList(
    value: any
    ):
    value is Array<any> {
        return Array.isArray(value); 
    }

/** 実際にnameを持っていれば、nameを持つオブジェクトとみなす*/
function isCharacter(
    character: any
    ):
    character is {name: string} {
        return "name" in character; // characterがnameプロパティを持っているか
    } 