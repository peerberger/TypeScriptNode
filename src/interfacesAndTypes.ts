interface Params {
    a: number,
    b: number
}

type ParamsMethod = (params: Params) => number;

const add: ParamsMethod = params => {

    // generate either 0 or 1
    let num = Math.floor(Math.random() * 2);

    if (num) {
        return params.a +  params.b;
    }
    //  else {
    //     return "fail";
    // }

}

const foo = (method: ParamsMethod) => {
    // code...
}