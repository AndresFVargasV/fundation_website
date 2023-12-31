PGDMP     ;    0                {            db_ACOR    15.3    15.3 9    ,           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            -           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            .           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            /           1262    16396    db_ACOR    DATABASE        CREATE DATABASE "db_ACOR" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "db_ACOR";
                postgres    false            �            1259    16420    comments    TABLE     �   CREATE TABLE public.comments (
    id integer NOT NULL,
    content text NOT NULL,
    user_id integer NOT NULL,
    publication_id integer NOT NULL
);
    DROP TABLE public.comments;
       public         heap    postgres    false            �            1259    16417    comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.comments_id_seq;
       public          postgres    false    219            0           0    0    comments_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;
          public          postgres    false    218            �            1259    16469    comments_publication_id_seq    SEQUENCE     �   CREATE SEQUENCE public.comments_publication_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.comments_publication_id_seq;
       public          postgres    false    219            1           0    0    comments_publication_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.comments_publication_id_seq OWNED BY public.comments.publication_id;
          public          postgres    false    224            �            1259    16461    comments_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.comments_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.comments_user_id_seq;
       public          postgres    false    219            2           0    0    comments_user_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.comments_user_id_seq OWNED BY public.comments.user_id;
          public          postgres    false    223            �            1259    16408    interactions    TABLE     �   CREATE TABLE public.interactions (
    id integer NOT NULL,
    type text NOT NULL,
    user_id integer NOT NULL,
    publication_id integer NOT NULL
);
     DROP TABLE public.interactions;
       public         heap    postgres    false            �            1259    16406    interactions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.interactions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.interactions_id_seq;
       public          postgres    false    217            3           0    0    interactions_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.interactions_id_seq OWNED BY public.interactions.id;
          public          postgres    false    216            �            1259    16496    interactions_publication_id_seq    SEQUENCE     �   CREATE SEQUENCE public.interactions_publication_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.interactions_publication_id_seq;
       public          postgres    false    217            4           0    0    interactions_publication_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.interactions_publication_id_seq OWNED BY public.interactions.publication_id;
          public          postgres    false    226            �            1259    16488    interactions_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.interactions_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.interactions_user_id_seq;
       public          postgres    false    217            5           0    0    interactions_user_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.interactions_user_id_seq OWNED BY public.interactions.user_id;
          public          postgres    false    225            �            1259    16398    publications    TABLE     �   CREATE TABLE public.publications (
    id integer NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    date date NOT NULL,
    user_id integer NOT NULL
);
     DROP TABLE public.publications;
       public         heap    postgres    false            �            1259    16397    publications_id_seq    SEQUENCE     �   CREATE SEQUENCE public.publications_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.publications_id_seq;
       public          postgres    false    215            6           0    0    publications_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.publications_id_seq OWNED BY public.publications.id;
          public          postgres    false    214            �            1259    16448    publications_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.publications_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.publications_user_id_seq;
       public          postgres    false    215            7           0    0    publications_user_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.publications_user_id_seq OWNED BY public.publications.user_id;
          public          postgres    false    222            �            1259    16431    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    lastname text NOT NULL,
    password text NOT NULL,
    document_type text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    document_id text NOT NULL,
    type_user text NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16430    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    221            8           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    220            ~           2604    16423    comments id    DEFAULT     j   ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);
 :   ALTER TABLE public.comments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219                       2604    16462    comments user_id    DEFAULT     t   ALTER TABLE ONLY public.comments ALTER COLUMN user_id SET DEFAULT nextval('public.comments_user_id_seq'::regclass);
 ?   ALTER TABLE public.comments ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    223    219            �           2604    16470    comments publication_id    DEFAULT     �   ALTER TABLE ONLY public.comments ALTER COLUMN publication_id SET DEFAULT nextval('public.comments_publication_id_seq'::regclass);
 F   ALTER TABLE public.comments ALTER COLUMN publication_id DROP DEFAULT;
       public          postgres    false    224    219            {           2604    16411    interactions id    DEFAULT     r   ALTER TABLE ONLY public.interactions ALTER COLUMN id SET DEFAULT nextval('public.interactions_id_seq'::regclass);
 >   ALTER TABLE public.interactions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            |           2604    16489    interactions user_id    DEFAULT     |   ALTER TABLE ONLY public.interactions ALTER COLUMN user_id SET DEFAULT nextval('public.interactions_user_id_seq'::regclass);
 C   ALTER TABLE public.interactions ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    225    217            }           2604    16497    interactions publication_id    DEFAULT     �   ALTER TABLE ONLY public.interactions ALTER COLUMN publication_id SET DEFAULT nextval('public.interactions_publication_id_seq'::regclass);
 J   ALTER TABLE public.interactions ALTER COLUMN publication_id DROP DEFAULT;
       public          postgres    false    226    217            y           2604    16401    publications id    DEFAULT     r   ALTER TABLE ONLY public.publications ALTER COLUMN id SET DEFAULT nextval('public.publications_id_seq'::regclass);
 >   ALTER TABLE public.publications ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            z           2604    16449    publications user_id    DEFAULT     |   ALTER TABLE ONLY public.publications ALTER COLUMN user_id SET DEFAULT nextval('public.publications_user_id_seq'::regclass);
 C   ALTER TABLE public.publications ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    222    215            �           2604    16434    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            "          0    16420    comments 
   TABLE DATA           H   COPY public.comments (id, content, user_id, publication_id) FROM stdin;
    public          postgres    false    219   /A                  0    16408    interactions 
   TABLE DATA           I   COPY public.interactions (id, type, user_id, publication_id) FROM stdin;
    public          postgres    false    217   LA                 0    16398    publications 
   TABLE DATA           I   COPY public.publications (id, title, content, date, user_id) FROM stdin;
    public          postgres    false    215   iA       $          0    16431    users 
   TABLE DATA           r   COPY public.users (id, name, lastname, password, document_type, email, phone, document_id, type_user) FROM stdin;
    public          postgres    false    221   �A       9           0    0    comments_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.comments_id_seq', 1, false);
          public          postgres    false    218            :           0    0    comments_publication_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.comments_publication_id_seq', 1, false);
          public          postgres    false    224            ;           0    0    comments_user_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.comments_user_id_seq', 1, false);
          public          postgres    false    223            <           0    0    interactions_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.interactions_id_seq', 1, false);
          public          postgres    false    216            =           0    0    interactions_publication_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.interactions_publication_id_seq', 1, false);
          public          postgres    false    226            >           0    0    interactions_user_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.interactions_user_id_seq', 1, false);
          public          postgres    false    225            ?           0    0    publications_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.publications_id_seq', 1, false);
          public          postgres    false    214            @           0    0    publications_user_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.publications_user_id_seq', 1, false);
          public          postgres    false    222            A           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public          postgres    false    220            �           2606    16429    comments comments_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_pkey;
       public            postgres    false    219            �           2606    16416    interactions interactions_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.interactions
    ADD CONSTRAINT interactions_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.interactions DROP CONSTRAINT interactions_pkey;
       public            postgres    false    217            �           2606    16405    publications publications_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.publications
    ADD CONSTRAINT publications_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.publications DROP CONSTRAINT publications_pkey;
       public            postgres    false    215            �           2606    16438    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    221            �           2606    16483    comments publication - comment    FK CONSTRAINT     �   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "publication - comment" FOREIGN KEY (publication_id) REFERENCES public.publications(id) NOT VALID;
 J   ALTER TABLE ONLY public.comments DROP CONSTRAINT "publication - comment";
       public          postgres    false    215    219    3203            �           2606    16509 &   interactions publication - interaction    FK CONSTRAINT     �   ALTER TABLE ONLY public.interactions
    ADD CONSTRAINT "publication - interaction" FOREIGN KEY (publication_id) REFERENCES public.publications(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 R   ALTER TABLE ONLY public.interactions DROP CONSTRAINT "publication - interaction";
       public          postgres    false    217    215    3203            �           2606    16478    comments user - comment    FK CONSTRAINT     �   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "user - comment" FOREIGN KEY (user_id) REFERENCES public.users(id) NOT VALID;
 C   ALTER TABLE ONLY public.comments DROP CONSTRAINT "user - comment";
       public          postgres    false    3209    219    221            �           2606    16504    interactions user - interaction    FK CONSTRAINT     �   ALTER TABLE ONLY public.interactions
    ADD CONSTRAINT "user - interaction" FOREIGN KEY (user_id) REFERENCES public.users(id) NOT VALID;
 K   ALTER TABLE ONLY public.interactions DROP CONSTRAINT "user - interaction";
       public          postgres    false    3209    221    217            �           2606    16595    publications user - publication    FK CONSTRAINT     �   ALTER TABLE ONLY public.publications
    ADD CONSTRAINT "user - publication" FOREIGN KEY (user_id) REFERENCES public.users(id) NOT VALID;
 K   ALTER TABLE ONLY public.publications DROP CONSTRAINT "user - publication";
       public          postgres    false    221    3209    215            "      x������ � �             x������ � �            x������ � �      $      x������ � �     