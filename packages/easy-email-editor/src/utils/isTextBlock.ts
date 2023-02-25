import { BasicType, AdvancedType } from 'easy-pdf-core';

export function isTextBlock(blockType: any) {
  return blockType === BasicType.TEXT || blockType === AdvancedType.TEXT;
}
