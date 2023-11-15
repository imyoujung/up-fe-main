import allImg from '@images/ingredient/allIngredient/all.png';
import beerImg from '@images/ingredient/allIngredient/beer.png';
import bitterImg from '@images/ingredient/allIngredient/bitter.png';
import drinkImg from '@images/ingredient/allIngredient/drink.png';
import etcImg from '@images/ingredient/allIngredient/etc.png';
import ginImg from '@images/ingredient/allIngredient/gin.png';
import liqueurImg from '@images/ingredient/allIngredient/liqueur.png';
import rumImg from '@images/ingredient/allIngredient/rum.png';
import sakeImg from '@images/ingredient/allIngredient/sake.png';
import tequilaImg from '@images/ingredient/allIngredient/tequila.png';
import vodkaImg from '@images/ingredient/allIngredient/vodka.png';
import whiskeyImg from '@images/ingredient/allIngredient/whiskey.png';
import wineImg from '@images/ingredient/allIngredient/wine.png';

import beerImgSmall from '@images/ingredient/swipe/beer.png';
import bitterImgSmall from '@images/ingredient/swipe/bitter.png';
import drinkImgSmall from '@images/ingredient/swipe/drink.png';
import ginImgSmall from '@images/ingredient/swipe/gin.png';
import liqueurImgSmall from '@images/ingredient/swipe/liqueur.png';
import rumImgSmall from '@images/ingredient/swipe/rum.png';
import sakeImgSmall from '@images/ingredient/swipe/sake.png';
import tequilaImgSmall from '@images/ingredient/swipe/tequila.png';
import vodkaImgSmall from '@images/ingredient/swipe/vodka.png';
import whiskeyImgSmall from '@images/ingredient/swipe/whiskey.png';
import wineImgSmall from '@images/ingredient/swipe/wine.png';

export enum IngredientTypesEnum {
  ALL = '전체',
  WHISKEY = '위스키',
  RUM = '럼',
  GIN = '진',
  VODKA = '보드카',
  TEQUILA = '데킬라',
  LIQUEUR = '리큐르',
  BITTER = '비터',
  WINE = '와인',
  BEER = '맥주',
  SAKE = '사케',
  FRUIT_DRINK = '음료',
  ETC = '기타',
}

export type IngredientTypes = keyof typeof IngredientTypesEnum;

interface IngredientImgType {
  src: string;
  name: IngredientTypesEnum;
  sn: IngredientTypes;
}

export const IngredientImgTypes: IngredientImgType[] = [
  { src: allImg, name: IngredientTypesEnum.ALL, sn: 'ALL' },
  { src: whiskeyImg, name: IngredientTypesEnum.WHISKEY, sn: 'WHISKEY' },
  { src: rumImg, name: IngredientTypesEnum.RUM, sn: 'RUM' },
  { src: ginImg, name: IngredientTypesEnum.GIN, sn: 'GIN' },
  { src: vodkaImg, name: IngredientTypesEnum.VODKA, sn: 'VODKA' },
  { src: tequilaImg, name: IngredientTypesEnum.TEQUILA, sn: 'TEQUILA' },
  { src: liqueurImg, name: IngredientTypesEnum.LIQUEUR, sn: 'LIQUEUR' },
  { src: bitterImg, name: IngredientTypesEnum.BITTER, sn: 'BITTER' },
  { src: wineImg, name: IngredientTypesEnum.WINE, sn: 'WINE' },
  { src: beerImg, name: IngredientTypesEnum.BEER, sn: 'BEER' },
  { src: sakeImg, name: IngredientTypesEnum.SAKE, sn: 'SAKE' },
  { src: drinkImg, name: IngredientTypesEnum.FRUIT_DRINK, sn: 'FRUIT_DRINK' },
  { src: etcImg, name: IngredientTypesEnum.ETC, sn: 'ETC' },
];

export const TabTypeEnum = {
  MYSELF: 'myself',
  ALL: 'all',
} as const;

export type TabType = (typeof TabTypeEnum)[keyof typeof TabTypeEnum];
export const IngredientSwipeImgTypes: IngredientImgType[] = [
  { src: allImg, name: IngredientTypesEnum.ALL, sn: 'ALL' },
  { src: whiskeyImgSmall, name: IngredientTypesEnum.WHISKEY, sn: 'WHISKEY' },
  { src: rumImgSmall, name: IngredientTypesEnum.RUM, sn: 'RUM' },
  { src: ginImgSmall, name: IngredientTypesEnum.GIN, sn: 'GIN' },
  { src: vodkaImgSmall, name: IngredientTypesEnum.VODKA, sn: 'VODKA' },
  { src: tequilaImgSmall, name: IngredientTypesEnum.TEQUILA, sn: 'TEQUILA' },
  { src: liqueurImgSmall, name: IngredientTypesEnum.LIQUEUR, sn: 'LIQUEUR' },
  { src: bitterImgSmall, name: IngredientTypesEnum.BITTER, sn: 'BITTER' },
  { src: wineImgSmall, name: IngredientTypesEnum.WINE, sn: 'WINE' },
  { src: beerImgSmall, name: IngredientTypesEnum.BEER, sn: 'BEER' },
  { src: sakeImgSmall, name: IngredientTypesEnum.SAKE, sn: 'SAKE' },
  { src: drinkImgSmall, name: IngredientTypesEnum.FRUIT_DRINK, sn: 'FRUIT_DRINK' },
  { src: etcImg, name: IngredientTypesEnum.ETC, sn: 'ETC' },
];
