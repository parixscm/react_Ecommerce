/**
 * 파일 역할: 상품 컴포넌트
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.04.07.
 */

type AddBtnProps = {
  addItemHandler: () => void;
};

function AddToCartButton({ addItemHandler }: AddBtnProps) {
  return (
    <button
      onClick={addItemHandler}
      className="rounded-md bg-grey p-3 hover:opacity-70"
    >
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
