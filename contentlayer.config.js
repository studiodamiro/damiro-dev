import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: { type: 'string', resolve: (doc) => `/${doc._raw.flattenedPath}` },
  slugAsParams: { type: 'string', resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/') },
};

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.md`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    pretext: { type: 'string' },
    subtext: { type: 'string' },
    description: { type: 'string' },
  },
  computedFields,
}));

export const Works = defineDocumentType(() => ({
  name: 'Works',
  filePathPattern: `works/**/*.md`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string' },
    date: { type: 'date', required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Works, Page],
  mdx: {
    remarkPlugins: [remarkGfm], // Only works on remark-gfm v3.0.1, not the latest
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
    ],
  },
});

const rehypePrettyCodeOptions = {
  theme: 'rose-pine',
  onVisitLine(node) {
    if (node.children.length === 0) node.children = [{ type: 'text', value: ' ' }];
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('line--highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word--highlighted'];
  },
};

const rehypeAutolinkHeadingsOptions = {
  properties: { className: ['anchor'] },
};
