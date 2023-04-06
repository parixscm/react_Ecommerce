/**
 * 파일 역할: 토스트 알림 utility function
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.30.
 */

import toast from "react-hot-toast";

// content = 알림 문구
export const notify = (content: string): void => {
  toast.success(content, {
    duration: 2500,
    position: "bottom-center",
  });
};
