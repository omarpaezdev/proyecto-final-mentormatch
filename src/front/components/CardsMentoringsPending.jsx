import useGlobalReducer from "../hooks/useGlobalReducer";


const CardsMentoringsPending = ({ session }) => {
     const { store, dispatch } = useGlobalReducer()

    const formatFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        return new Intl.DateTimeFormat("es-ES", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
            .format(fecha)
            .replace(",", " |"); // para separar con una barra
    };

    // Ejemplo de uso:
    formatFecha("2025-11-04T18:30:00Z");
    // → "04 noviembre 2025 | 19:30" (ajusta automáticamente al horario local)





    return (
        <>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex">
                <div className="card card-student text-center mb-3 flex-fill ">
                    <div className="d-flex flex-column align-items-start  py-3 px-3">
                        
                            <p className=" fs-5 fw-semibold  card-title-student mb-3" >{store.user.role==='mentor' ? session?.student_profile?.name : session?.mentor_profile?.name}</p>
                            <p className="fs-5 text-session-topic fw-bold  mb-3" >{session?.topic?.title}</p>
                            <p className=" text-light fs-4  " >{formatFecha(session?.start_time)}</p>
                        
                        
                    </div>

                </div>
            </div>


        </>



    )




}
export default CardsMentoringsPending