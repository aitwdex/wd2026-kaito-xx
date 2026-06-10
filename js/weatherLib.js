// 天気コードを日本語へ変換

export function weather(code){

    if(code === 0){
        return "快晴";
    }

    else if(code <= 3){
        return "晴れ";
    }

    else if(code <= 48){
        return "霧";
    }

    else if(code <= 67){
        return "雨";
    }

    else if(code <= 77){
        return "雪";
    }

    else{
        return "不明";
    }
}

// 都市データ

export const cities = {

    tokyo: {
        name: "東京",
        lat: 35.6764,
        lon: 139.6500

    },

    london: {
        name: "ロンドン",
        lat: 51.5072,
        lon: -0.1276
    },

    newyork: {
        name: "ニューヨーク",
        lat: 40.7128,
        lon: -74.0060
    },

    paris: {
        name: "パリ",
        lat: 48.8566,
        lon: 2.3522
    }
};