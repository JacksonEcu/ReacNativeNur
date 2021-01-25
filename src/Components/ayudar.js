import React, { Component } from 'react'

export default class ayudar extends Component {
    render() {
        return (
            <div>
    <div class="section-about container mt-5 pt-5">
            <div class="flex justify-center flex-wrap w-full mt-5">
                <div class="w-full relative flex flex-wrap mt-5 px-5 sm:w-2/3 bg-indigo-50">
                    <div class="w-full md:w-6/12">
                        <h1 class="text-5xl uppercase pb-6">
                            <b class="font-bold">CÓMO</b><br />
                            PUEDO AYUDAR? <br />
                            <hr class="mt-2 bg-yellow-300 text-yellow-300 h-2 w-20" />
                        </h1>

                        <p class="text-justify">
                            Buscamos computadores usados, partes y repuestos para entregarlos a estudiantes del IST YAVIRAC que no disponen al momento de equipos propios
                        </p>
                        <div class="pt-12">
                            <a href="#" class="bg-yellow-300 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-600 hover:text-white">Quiero participar</a>
                        </div>

                        <div class="block relative bg-red-50 mt-5 py-5 px-5 md:hidden">
                            <p class="mt-5"><i class="fa fa-gift"></i> Dona un computador</p>
                            <p class="mt-5"><i class="fa fa-laptop"></i> Dona partes y piezas</p>

                            <p class="mt-5"><i class="fa fa-globe"></i> Promueve el proyecto en redes</p>
                            <p class="mt-5 mb-5"><i class="fa fa-user"></i> Hazte volunatrio</p>
                        </div>
                    </div>

                    <div class="hidden w-full md:w-6/12 relative md:block">
                        <div class="relative md:absolute top-40 right-0 bg-red-50 py-10 px-10">
                            <p class="mt-5"><i class="fa fa-gift"></i> Dona un computador</p>
                            <p class="mt-5"><i class="fa fa-laptop"></i> Dona partes y piezas</p>

                            <p class="mt-5"><i class="fa fa-globe"></i> Promueve el proyecto en redes</p>
                            <p class="mt-5 mb-5"><i class="fa fa-user"></i> Hazte volunatrio</p>
                        </div>
                    </div>
                </div>

                <div class="w-full px-5 sm:w-1/3 mt-5">
                    <div class="w-full h-auto text-3xl py-5 px-5 text-white text-center">
                        <img class="w-full h-auto object-cover" src="http://nur.yavirac.edu.ec/images/donante_20201226_183410.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
             </div>

        )
    }
}
