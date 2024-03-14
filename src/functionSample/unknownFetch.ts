export async function unknownFetch() {
    // yugioh APIからデータを取得
    const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Arc%20Rebellion%20Xyz%20Dragon");

    return response.json().then((data: unknown) => {
        if(containsData(data)){ 
            return data.data; // dataプロパティのみを抽出
        }
        return null;
    })
    .then((data: unknown) => {
        if (isList(data)){ 
            return data[0];
        }
        return null;
    }
    )
    .then((data: unknown) => {
        if (hasName(data)){
            return data;
        };
        return null;
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
function hasName(
    value: any
    ): 
    value is {name: any} {
        return value !== null && "name" in value; // valueがnameプロパティを持っているか
    } 