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
    const first = document.querySelector(".ant-pagination-item.ant-pagination-item-1");
    const last = document.querySelector(`.ant-pagination-item.ant-pagination-item-${total}`);

    if (total <= 5) return;

    if (params.page >= 4) {
      if (first) first.classList.add("hidden");
    } else if (first) first.classList.remove("hidden");

    if (params.page < total - 2) {
      if (last) last.classList.add("hidden");
    } else if (last) last.classList.remove("hidden");

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
