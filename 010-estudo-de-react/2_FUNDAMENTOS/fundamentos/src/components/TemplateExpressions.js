const TemplateExpressions = () => {
    const name = "Roney";
    const data = {
        age: 30,
        job: "programmer",
    }

    return ( 
    <div>
        <h1>Olá {name}, tudo bem?</h1>
        <p>Sua profissão é {data.job}</p>
    </div>
    );
}

export default TemplateExpressions;
