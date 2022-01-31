import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { FavouriteCommonEntityList } from "@components/Favourites";
import { PageTitle } from "@components/Layout";
import { favouriteSeriesData } from "@data";
import { FAVOURITE_TYPES } from "@constants";

const FavouriteSeriesPage = (props) => {
  // const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/favourites/series" page="favouriteSeries" />
      <Div width="100%" py="3">
        <PageTitle title="favourites.series.title" />
        <FavouriteCommonEntityList
          items={favouriteSeriesData}
          entityType={FAVOURITE_TYPES.SHOW.SERIES}
        />
      </Div>
    </>
  );
};

export default FavouriteSeriesPage;
