import Send from "axios";

export default {
  test(index) {
    return Send({
      url: "/api/get/test",
      method: "get",
      params: index,
    });
  },
  testPost(index) {
    return Send({
      url: "/api/post/test",
      method: "post",
      data: index,
    });
  },
};
