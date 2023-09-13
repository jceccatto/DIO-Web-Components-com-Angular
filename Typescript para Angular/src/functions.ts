//Funções
    function addNumber(x: number, y: number): number{
        return x +y ;
    }

    function addToHello(name: string): string{
        return `Hello ${name}`;
    }

    let soma:number = addNumber(4,7);
    console.log(soma);
    console.log(addToHello("Ceccatto"));

//Funções Multi tipos
    function callToPhone(phone: number | string): number | string{
        return phone;
    }

    console.log(callToPhone("113133111"));
    console.log(callToPhone(113133111));

//Funções assincronas
    async function getDatabase(id: number): Promise<number | string> {
        return "ceccatto";
    }