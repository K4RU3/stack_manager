import axios from "axios";

const API = axios.create({
    baseURL: process.env.development === "true"
    ? "localhost:5678"
    : window.location.origin
})

const getCurrentData = () => {
    return API.get("/api/static_data");
}

const getStaticData = () => {
    return API.get("/api/current_data");
}

type currentType = {
    [key: string]: {
        created_at: string,
        data: [{
            stack: number,
            star: number
        }]
    }
}

type staticType = {
    username: "string",
    stack: number,
    star: number
}[]

const getData = async () => {
    return new Promise<currentType>((resolve, reject) => {
        Promise.all([getCurrentData(), getStaticData()]).then(([rawCurrentData, rawStaticData]) => {
            let [currentData, staticData]: [currentType, staticType] = [rawCurrentData.data, rawStaticData.data];

            // currentData check
            for (let key in currentData) {
                if (currentData.hasOwnProperty(key)) {
                    const { created_at, data } = currentData[key];
                    if (typeof created_at !== "string" || isNaN(Date.parse(created_at))) reject("created_at is not date type");
                    for (let user of data) {
                        if (user !== null) {
                            if (typeof user?.stack !== "number" || typeof user?.star !== "number") reject("stack or star is not a number");
                        }
                    }
                } else {
                    reject("currentdata has not property: " + key);
                }
            }
            // staticData check
            for (let user of staticData) {
                if (typeof user?.username !== "string" || typeof user?.stack !== "number" || typeof user?.star !== "number") reject("static data is invalid");
            }

            const today = new Date();
            for (let data of staticData) {
                if (data.username in currentData) {
                    let created = new Date(currentData[data.username].created_at);
                    const daysDiff = Math.floor((today.valueOf() - created.valueOf()) / (24 * 60 * 60 * 1000));
                    
                    const { stack, star } = data;
                    currentData[data.username].data[daysDiff] = { stack, star };
                } else {
                    let today = new Date();
                    today.setHours(0, 0, 0, 0);

                    currentData[data.username] = {
                        created_at: today.toString(),
                        data: [{ stack: data.stack, star: data.star }]
                    }
                }
            }

            resolve(currentData);
        });
    })
}

export { getData };
export type { currentType };
