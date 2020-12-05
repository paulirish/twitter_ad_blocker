let checked_for_ads = false;

setInterval(() => {
  if (checked_for_ads) {
    return;
  }

  const ads = getAds();

  if (ads.length) {
    ads.forEach(hideAd);
    checked_for_ads = true;
  }
}, 500);

function getAds() {
  return document.querySelectorAll('div[data-testid=placementTracking]');
}

function hideAd(ad) {
  ad.remove();
}

// check for fake news again, if user auto loads more ads in feed
document.addEventListener('scroll', () => getAds().forEach(hideAd));