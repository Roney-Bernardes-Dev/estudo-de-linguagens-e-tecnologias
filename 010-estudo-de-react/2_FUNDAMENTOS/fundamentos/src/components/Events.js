const Events = () => {
    const handMyEvents = (e) => {
        console.log(e); // mostra informações do evento


        console.log("Ativou o Evento");
    };

    return (
        <div>
            <div>
                <button onClick={handMyEvents}>Clique aqui</button>
            </div>
            <div>
                <button onClick={handMyEvents}>Clique aqui novamente</button>
            </div>
        </div>
    );
};

export default Events