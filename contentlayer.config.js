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
  name: 'Work',
  filePathPattern: `works/**/*.md`,
  contentType: 'mdx',
  fields: {
    company: { type: 'string', required: true },
    pretext: { type: 'string' },
    subtext: { type: 'string' },
    description: { type: 'string' },
    date: { type: 'date', required: true },
    works: { type: 'string', required: true },
    technologies: { type: 'string', required: true },
    links: { type: 'string' },
    colors: { type: 'string', required: true },
  },
  computedFields,
}));

export const Musings = defineDocumentType(() => ({
  name: 'Musing',
  filePathPattern: `musings/**/*.md`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    pretext: { type: 'string' },
    subtext: { type: 'string' },
    description: { type: 'string' },
    date: { type: 'date', required: true },
    colors: { type: 'string' },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Musings, Works, Page],
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
