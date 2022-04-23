export type TMenu = {
  id: number;
  startDate: string;
  endDate: Date;
  sections: TSection[];
};

export type TItem = {
  id: number;
  label: string;
  description: null | string;
  displayOrder: number;
  unitPriceFractional: number;
  currency: "SGD";
  imageURL: string;
  itemStock: {
    quantityLeft: number;
  };
};

export type TSection = {
  id: number;
  label: string;
  description: string;
  displayOrder: number;
  disabled: boolean;
  disabledReason: null | string;
  items: TItem[];
  subSections: TSubSection[];
};

export type TSubSection = {
  id: number;
  label: string;
  description: string;
  displayOrder: number;
  disabled: boolean;
  disabledReason: string | null;
  items: TItem[];
};
