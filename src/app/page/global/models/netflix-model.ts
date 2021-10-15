export interface NetflixModel {
    nav: Nav;
    hero: Hero; 
    filmsTerror: FilmsTerror;
    filmsIndies: FilmsIndies;
}

export interface Nav {
    logo: Img; 
    titleWarner: string;
    titleHome: string;
    titleSearch: string;
}

export interface Hero {
    title: string;
    imgGallery: Img[]; 
}

export interface FilmsTerror {
    title: string;
    imgGallery: Img[];
}

export interface FilmsIndies {
    title: string;
    imgGallery: Img[];
}

export interface Img {
    src: string;
    alt: string;
}

export interface Gallery {
    img: Img;
}
