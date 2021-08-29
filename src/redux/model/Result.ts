    export default interface Result {
        wrapperType: string;
        artistType: string;
        artistName: string;
        artistLinkUrl: string;
        artistId: number;
        amgArtistId: number;
        primaryGenreName: string;
        primaryGenreId: number;
        collectionType: string;
        collectionId?: number;
        collectionName: string;
        collectionCensoredName: string;
        artistViewUrl: string;
        collectionViewUrl: string;
        artworkUrl60: string;
        artworkUrl100: string;
        collectionPrice?: number;
        collectionExplicitness: string;
        trackCount?: number;
        copyright: string;
        country: string;
        currency: string;
        trackPrice: number;
        releaseDate?: Date;
        contentAdvisoryRating: string;
    }
