import { LetterboxdModel, FilmsTerror } from './models/letterboxd-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent implements OnInit {
  public letterboxdModel: LetterboxdModel;
  public filmsIndies: FilmsTerror; 
  constructor() {
    this.letterboxdModel = {
      nav: {
        titleWarner: 'Letterboxd Movie Gallery',
        titleHome: 'Inicio',
        titleSearch: 'Buscar',
        logo: {
          src: 'https://a.ltrbxd.com/logos/letterboxd-mac-icon.png',
          alt: 'Letterboxd Logo',
        },
      },
      hero: {
        title: 'LOS 5 ESTRENOS DE LA SEMANA',
        imgGallery: [
          {
            src: 'https://www.moviepostersgallery.com/wp-content/uploads/2021/08/Lastduel1.jpg',
            alt: 'THE LAST DUEL',
          },
          {
            src: 'https://www.moviepostersgallery.com/wp-content/uploads/2021/06/Eternals1.jpg',
            alt: 'ETERNALS',
          },
          {
            src: 'https://www.moviepostersgallery.com/wp-content/uploads/2021/08/Jurassicparkdominion2.jpg',
            alt: 'JURASSIC WORLD: DOMINION',
          },
          {
            src: 'https://www.moviepostersgallery.com/wp-content/uploads/2020/01/Topgunmaverick2.jpg',
            alt: 'TOP GUN: MAVERICK',
          },
          {
            src: 'https://www.moviepostersgallery.com/wp-content/uploads/2021/01/Deathonthenile1.jpg',
            alt: 'DEATH ON THE NILE',
          },
        ],
      },
      filmsTerror: {
        title: "Películas de Terror",
        imgGallery: [
          {
            src: 'https://www.moviepostersgallery.com/wp-content/uploads/2021/08/Lastnightinsoho1.jpg',
            alt: 'LAST NIGHT IN SOHO',
          },
          {
            src: 'https://www.moviepostersgallery.com/wp-content/uploads/2018/10/Suspiria20181.jpg',
            alt: 'SUSPIRIA',
          },
          {
            src: 'https://www.moviepostersgallery.com/wp-content/uploads/2018/A-B/Aliencovenant14.jpg',
            alt: 'ALIEN: COVENANTS',
          },
          {
            src: 'https://www.moviepostersgallery.com/wp-content/uploads/2018/I-J/Itfollows1.jpg',
            alt: 'IT FOLLOWS',
          },
          {
            src: 'https://www.moviepostersgallery.com/wp-content/uploads/2018/T/Thing8.jpg',
            alt: 'THE THING',
          }, 
        ]
      },
      insertNewPoster: {
       title: "¿Crees que falta algún Poster? ¡Inserta aquí el que quieras!",
       img: {
        src: 'https://www.bing.com/th/id/OGC.ac6ae5e7487b2b30e49780afb1e4469d?pid=1.7&rurl=https%3A%2F%2Fwww.memoryfoamtalk.com%2Fwp-content%2Fuploads%2F2017%2F09%2Farrow-down1.gif&ehk=LTKAhfj9SHZw9TbmVT3fZ%2Boy0D5E8kF3j77wz6jQtz8%3D',
        alt: 'Flecha Logo',
      }, 
      },
    };
    this.filmsIndies = {
      title: "Películas Indies",
      imgGallery: [
        {
          src: 'https://www.moviepostersgallery.com/wp-content/uploads/2021/09/Lamb1.jpg',
          alt: 'LAMB',
        },
        {
          src: 'https://www.moviepostersgallery.com/wp-content/uploads/2019/10/Midsommar2-1.jpg',
          alt: 'MIDSOMMAR',
        },
        {
          src: 'https://www.moviepostersgallery.com/wp-content/uploads/2019/10/Lighthouse2.jpg',
          alt: 'THE LIGHTHOUSE',
        },
        {
          src: 'https://www.moviepostersgallery.com/wp-content/uploads/2018/G-H/Getout2.jpg',
          alt: 'GET OUT',
        },
        {
          src: 'https://www.moviepostersgallery.com/wp-content/uploads/2018/11/Mondoannihilation1.jpg',
          alt: 'ANNIHILATION',
        }, 
      ]
    }
  }

  ngOnInit(): void {}
}
