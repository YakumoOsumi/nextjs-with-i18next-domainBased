// src/i18n/navigation.ts
import {createNavigation} from 'next-intl/navigation';
import {routing} from './routing';

// Next.jsのナビゲーションAPIを軽量にラップしルーティング設定を考慮します
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);