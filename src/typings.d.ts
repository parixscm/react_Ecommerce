/**
 * 파일 역할: 프로젝트 관련 변수 타입 선언
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.23.
 */

declare module "*.png";

type CartItemType = {
  id: number;
  image: string;
  name: string;
  price: number;
  desc: string;
  amount?: number;
};
