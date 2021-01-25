import React, { Component } from 'react'

export default class donante extends Component {
    render() {
        return (
            <div>
                
                <div class="mx-auto flex- text-4xl md:font-extrabold text-center py-8 flex-wrap">
                <span class=" bg-gradient-to-r from-yellow-600	 via-yellow-200 to-gray-300">
                        La educación es uno de los factores que más influye en el avance y progreso de personas y sociedades
                s
                </span>
                </div>  
                <div class="section-about relative h-64">
            <div class="relative bg-cover bg-center h-64 text-white py-24 px-1 object-cover"></div>
            <div class="absolute top-0 bottom-0 left-0 w-full h-full">
                <div class="md:flex justify-center align-middle content-center w-full h-full mt-5">
                    <p class="text-center text-4xl pt-5 md:pt-14">
                        <b class="text-yellow-300">10</b><br />
                        Estamos muy orgullosos de nuestros Amables <b class="text-yellow-300"><i class="fa fa-heart"></i></b> <b>Dontantes</b>
                    </p>
                </div>
            </div>
        </div>    
            </div>
        )
    }
}
