(function getAmazonTracking() {
  try {
    if (window.location.hostname !== "www.amazon.com") {
      window.alert("This must be used in Amazon only");
      return;
    }

    const state = document.querySelector("script[type='a-state']");
    if (state === null || !state.textContent) {
      window.alert("This must be used in an Amazon tracking page");
      return;
    }

    const parsedState = JSON.parse(state.textContent);
    const orderId = parsedState.orderId;

    if (!orderId) {
      throw new Error(
        `Couldn't retrieve orderId, stateContent: ${parsedState}`
      );
    }

    let carrierText = document
      .querySelector("#carrierRelatedInfo-container h1")
      ?.textContent?.trim();

    if (!/Shipped with |Delivery by /gi.test(carrierText ?? "")) {
      carrierText = document
        .querySelector(".carrierRelatedInfo-mfn-carrierNameTitle")
        ?.textContent?.trim();
    }

    const carrier =
      carrierText?.replace(/Shipped with |Delivery by /, "") ?? "N/A";
    let trackingId = parsedState.trackingId?.trim();

    if (!trackingId) {
      const trackingIdContainer = document.querySelector(
        "#carrierRelatedInfo-container"
      );

      if (trackingIdContainer) {
        trackingId = (
          trackingIdContainer.querySelector(
            ".carrierRelatedInfo-trackingId-text"
          ) ?? trackingIdContainer.querySelector("h4")
        )?.textContent
          ?.trim()
          ?.replace(/Tracking ID: /, "");
      }
    }

    if (!trackingId) {
      window.alert("Tracking information is not available");
      return;
    }

    if (
      window.confirm(
        `Order Id: ${orderId}\nCarrier: ${carrier}\nTracking Id: ${trackingId}\n\nPress OK submit tracking to Atlas Market`
      )
    ) {
      window.location.href = encodeURI(
        `https://atlas.market/tools/amazon-tracking?orderId=${orderId}&carrier=${carrier}&trackingId=${trackingId}`
      );
    }
  } catch (error) {
    console.log(error);
    window.alert("Error while retrieving tracking information");
  }
})();
