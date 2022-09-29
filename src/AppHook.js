import { useEffect, useState } from "react"

const AppHook = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cargo, setCargo] = useState('')
    const [historico, setHistorico] = useState('')
    const [curriculum, setCurriculum] = useState([])

    useEffect(() => {
        const tempList = localStorage.getItem('curriculum')
        if (tempList != null) {
            setCurriculum(JSON.parse(tempList))
        }
    }, [])

    const save = () => {
        const item = {
            nome, email, telefone, cargo, historico
        }

        const newCurriculum = [...curriculum, item]

        setNome('')
        setEmail('')
        setTelefone('')
        setCargo('')
        setHistorico('')
        setCurriculum(newCurriculum)

        localStorage.setItem('curriculum', JSON.stringify(newCurriculum))

    }



    return (
        <div>

            Nome: <br />
            <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
            <br /><br />

            E-mail: <br />
            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
            <br /><br />

            Telefone: <br />
            <input type="text" value={telefone} onChange={(event) => setTelefone(event.target.value)} />
            <br /><br />

            cargo: <br />
            <input type="text" value={cargo} onChange={(event) => setCargo(event.target.value)} />
            <br /><br />

            Histórico: <br />
            <input type="text" value={historico} onChange={(event) => setHistorico(event.target.value)} />
            <br /> <br />

            <input type="button" value="Salvar" onClick={save} />

            <br />

            <ul>
                {
                    curriculum.map((item, index) => (
                        <li key={index}>{item.nome} - {item.email} - {item.telefone} - {item.cargo} - {item.historico}</li>
                    ))
                }

            </ul>

        </div>
    )


}

export default AppHook


