<slot></slot>�����ڲ��ģ����,����:���չٷ��ĵ���˵��,

�������
https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD

<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
Ϊʲô����������ʹ���������﷨:�����ڸ����������У����ǿ���ʹ�ô�ֵ�� v-slot �����������ṩ�Ĳ�� prop ������

vuex��mapState��mapMutations��mapAction�����
https://blog.csdn.net/wangguoyu1996/article/details/80573113

module.loaders�����ļ��ļ���������������֮ǰreact��Ҫ��ҳ��������jsx��jsԴ�뵽ҳ��������Ȼ��ʹ�ø��﷨������ͨ��webpack�����Ͳ���Ҫ������JSXTransformer.js����������ļ�����������jsx-loader���������Ǵ���JSXTransformer.js�ģ�����style-loader��css-loader�������������ʹ��֮ǰ������Ҫͨ������������뵽��Ŀ�����������Ҫ�������������£�

jsx-loader������ npm install jsx-loader --save-dev
Style-loader������ npm install style-loader --save-dev
css-loader ������ npm install css-loader --save-dev
�ֲ���װwebpack ִ�����npm install webpack --save-dev
gulp��ȫ�ְ�װ������Ŀ�оֲ���װҲ��װ��
	Gulpȫ�ְ�װ npm install -g gulp
	gulp�ֲ���װ ʹ������ npm install gulp --save-dev

ִ������webpack, ����webpack,(����Ŀ��Ŀ¼��ִ��)

========
Git ��������
$git commit `//�����κ�release˵����commit���� 
$git push origin dev 
$git push origin master //���һ��,��dev�Ĵ������͵�Զ�ֿ̲�,leslieezhu@qq.com  ����+����

ѧϰ����
https://github.com/chrisvfritz/vue-2.0-simple-routing-example/tree/pagejs