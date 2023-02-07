export class Semering {
    constructor(
        sifra,
        tip,
        osovina,
        kuciste,
        visina,
        cena
    ) {
        this.sifra = sifra.trim();
        this.tip = tip.trim();
        this.osovina = osovina.trim();
        this.kuciste = kuciste.trim();
        this.visina = visina.trim();
        this.cena = cena.trim();
    }
}