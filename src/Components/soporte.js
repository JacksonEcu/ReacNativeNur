import React, { Component } from 'react'
import Reco from '../Images/reco.png'
import Aco from '../Images/aco.png'
import Carro from '../Images/carro.png'




export default class Soporte extends Component {
    render() {
        return (
            <div>
                        <div class="flex justify-center align-center flex-wrap w-full mt-5">
                        <div class="w-full md:w-4/12">
                            <p class="text-center text-5xl mt-5"></p>
                            <span><img src={Reco}  /></span>
                            <p class="text-center text-3xl mt-3">Recolectar</p><br></br>
                            <p class="mt-2">Se acuerda una cita con el donante para retirar el equipo y/o partes.</p>
                        </div>

                        <div class="w-full md:w-4/12">
                            <p class=""></p>
                            <span><img src={Aco} /></span>

                            <p class="text-center text-3xl mt-3">Acondicionar</p>
                            <p class="mt-2">A cada equipo se le hace: limpieza, mantenimiento, remanufactura e instalación de software base</p>
                        </div>

                        <div class="w-full md:w-4/12">
                            <p class=""></p>
                            <span><img src={Carro} /> <br></br></span>
                            <p class="">Entregar</p>
                            <p class="mt-2">
                                Llevamos los equipos directo a la casa de los estudiantes. <br />

                                Dona ahora.
                            </p>
                        </div>
                    </div>
                </div>
                
                
            
        )
    }
}
