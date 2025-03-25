import { FC, useEffect } from "react";
import { Pagination as AntPagination, ConfigProvider } from "antd";
import { useArticlesParams } from "../../../hooks/useArticlesParams";

const paginationTheme = {
  components: {
    Pagination: {
      itemActiveBg: "#157CDB",
    },
  },
};

export type PaginationProps = {
  total: number;
  onSwitch?: (index: number) => void;
};

export const Pagination: FC<PaginationProps> = ({ total, onSwitch }) => {
  const params = useArticlesParams();

  useEffect(() => {
    if (total <= 5) return;

    if(total === 7) {
      const element2 = document.querySelector(`.ant-pagination-item-2`);
      const element6 = document.querySelector(`.ant-pagination-item-6`);

      element2?.classList.toggle("hidden", params.page >= 5);
      element6?.classList.toggle("hidden", params.page <= 3);
    }

    const first = document.querySelector(".ant-pagination-item-1");
    const last = document.querySelector(`.ant-pagination-item-${total}`);

    first?.classList.toggle("hidden", params.page >= 4);
    last?.classList.toggle("hidden", params.page < total - 2);

  }, [params.page, total]);

  if (!total || total === 1) return undefined;

  return (
    <ConfigProvider theme={paginationTheme}>
      <AntPagination

        style={{ marginTop: "26px" }}
        total={total * 10}
        current={params.page}
        onChange={onSwitch}
        size="small"
        align="center"
      />
    </ConfigProvider>
  );
};
