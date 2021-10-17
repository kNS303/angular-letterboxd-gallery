export interface LetterboxdModel {
    nav: Nav;
    hero: Hero; 
    filmsTerror: FilmsTerror;
    insertNewPoster: InsertNewPoster;
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


export interface Img {
    src: string;
    alt: string;
}

export interface Gallery {
    img: Img;
}

export interface InsertNewPoster {

    title: string;
    img: Img;

}

export interface newposter {
    img: Img;
}
