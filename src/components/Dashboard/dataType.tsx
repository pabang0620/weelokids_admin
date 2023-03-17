import { Dispatch, SetStateAction } from 'react';
export interface trpcDataType {
  labelData?: string[];
  valueData?: number[] | undefined;
  setSelecter?: Dispatch<SetStateAction<Period>>;
  selecter?: Period;
  title?: string;
}
// 회원 타입
export interface trpcDataType2 {
  labelData?: string[];
  valueData?: number[] | undefined;
  clickValue?: number[] | undefined;
  setSelecter?: Dispatch<SetStateAction<Period2>>;
  selecter?: Period2;
  title?: string;
}
// 콘텐츠 타입
export interface trpcDataType3 {
  title?: string;
  retentionData?: retention[] | undefined;
}
type retention = {
  label: string;
  week: string;
  saturday: string;
  sunday: string;
};
// 리텐션 타입
export type Period = 'daily' | 'weekly' | 'monthly';
export type Period2 = 'daily' | 'weekly' | 'monthly' | 'all';
