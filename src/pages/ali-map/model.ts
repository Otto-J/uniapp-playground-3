export const markers = [
  {
    id: 0,
    latitude: 30.266786,
    longitude: 120.10675,
    width: 19,
    height: 31,
    iconPath:
      "https://gw.alipayobjects.com/mdn/rms_dfc0fe/afts/img/A*x9yERpemTRsAAAAAAAAAAAAAARQnAQ",
    callout: {
      content: "callout",
    },
  },
];
export const panels = [
  {
    id: 6,
    layout: {
      src: "/layout/panel.xml",
    },
    position: {
      top: 5,
      right: 5,
      width: 200,
      height: 84,
    },
  },
];
export const animMarker = [
  {
    id: 1,
    latitude: 30.266786,
    longitude: 120.10675,
    width: 19,
    height: 31,

    iconPath:
      "https://gw.alipayobjects.com/mdn/rms_dfc0fe/afts/img/A*x9yERpemTRsAAAAAAAAAAAAAARQnAQ",

    fixedPoint: {
      originX: 200,
      originY: 150,
    },
    markerLevel: 2,
  },
];
export const labelMarker = [
  {
    id: 2,
    latitude: 30.266786,
    longitude: 120.10675,
    width: 19,
    height: 31,
    iconPath:
      "https://gw.alipayobjects.com/mdn/rms_dfc0fe/afts/img/A*x9yERpemTRsAAAAAAAAAAAAAARQnAQ",
    label: {
      content: "Hello Label",
      color: "#00FF00",
      fontSize: 14,
      borderRadius: 3,
      bgColor: "#ffffff",
      padding: 10,
    },
    markerLevel: 2,
  },
];
export const customCalloutMarker = [
  {
    id: 3,
    latitude: 30.266786,
    longitude: 120.10675,
    width: 19,
    height: 31,
    iconPath:
      "https://gw.alipayobjects.com/mdn/rms_dfc0fe/afts/img/A*x9yERpemTRsAAAAAAAAAAAAAARQnAQ",
    customCallout: {
      type: 2,
      descList: [
        {
          desc: "预计",
          descColor: "#333333",
        },
        {
          desc: "5分钟",
          descColor: "#108EE9",
        },
        {
          desc: "到达",
          descColor: "#333333",
        },
      ],
      isShow: 1,
    },
    markerLevel: 2,
  },
];

export const iconAppendStrMarker = [
  {
    id: 34,
    latitude: 30.266786,
    longitude: 120.10675,
    width: 19,
    height: 31,
    iconAppendStr: "iconAppendStr",
    markerLevel: 2,
  },
];
export const includePoints = [
  {
    latitude: 30.266786,
    longitude: 120.10675,
  },
];
export const baseLongitude = 120.10675;
export const baseLatitude = 30.266786;
