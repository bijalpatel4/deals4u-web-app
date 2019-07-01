import deals from "../data/fakeDeals";

export function getDealById(dealId) {
  const deal = deals.find(function(deal) {
    return deal._id === dealId;
  });
  return deal;
}

export function getDealsByZipCode(zipCode) {
  const dealsByZipCode = deals.filter(deal => deal.zipCode === zipCode);
  return dealsByZipCode;
}
